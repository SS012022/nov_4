import express from "express";

const app = express();
app.use(express.json());
app
  .route("/student")
  .get((req, res) => {
    res.send("Get data of all students");
  })
  .post((req, res) => {
    const stu = req.body;
    console.log(stu);
    res.send(stu);
  })
  .put((req, res) => {
    res.send("Updating student data");
  })
  .delete((req, res) => {
    res.send("deleting student record");
  });

app.listen(8080, () => {
  console.log("Server started");
});
