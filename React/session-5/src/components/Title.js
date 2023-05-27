//export const Title = (props) => { //this is exporting by name
const Title = (props) =>{
    const imgPath = props.imgPath;
    return(
        <a href="/">
            {/* <img src={imgPath} alt ="React logo" style={{width: '50px'}}/> */}
            <h2>{imgPath}</h2>
        </a>
    )
}

export default Title;