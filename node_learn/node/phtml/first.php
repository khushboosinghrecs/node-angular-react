<script src="https://unpkg.com/phtml"></script>
<script>
const html = `<my-component class="main">
  <title>Super Title</title>
  <text>Awesome Text</text>
</my-component>`;

phtml.process(html, { from: 'my-component.html' }).then(console.log);
</script>
