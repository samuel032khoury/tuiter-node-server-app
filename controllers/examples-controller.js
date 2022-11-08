const examplesController = (app) => {
  app.get('/hello', (req, res) => {
    console.log("Hello World!");
    res.send("Hello World!")
  })
  app.get('/goodbye', (req, res) => {
    res.send("Good Bye!")
  })
  app.get('/add/:a/:b', (req, res) => {
    const A = parseInt(req.params.a);
    const B = parseInt(req.params['b']);
    const C = A + B;
    res.send(`${A} + ${B} = ${C}`)
  })
  app.post('', () => {})
  app.delete('', () => {})
  app.put('', () => {})
}

export default examplesController;