require('dotenv').config();
require('express-async-errors');

const helmet = require('helmet');

const cors= require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

const swagerUI = ('swagger-ui-express');
const YAML= require('yamljs');
const swaggerDocument = YAML.load(__dirname,'./api/swagger/swagger.yaml');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const authenticateUser = require('./middleware/authentication');

const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.set('trust proxy', 1);
app.use(
    rateLimiter({
        windowMS: 15*60*1000,
        max: 100
    })
)

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.get('/', (req, res) => {
    res.send('<h1>Jobs API</h1><a href="/api-docs">Documentation</a>');
  });
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
  
  // routes
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/jobs', authenticateUser, jobsRouter);
  
  app.use(notFoundMiddleware);
  app.use(errorHandlerMiddleware);
  
  const port =  5000;
  
  const start = async () => {
    try {
      await connectDB();
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();
  