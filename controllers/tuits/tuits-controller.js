import * as tuitsDao from "../../tuits/tuits-dao.js"
import {ObjectID} from "mongodb";

const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  res.json(tuits)
};

const createTuit = async (req, res) => {
  const newTuit = req.body;
  newTuit._id = new ObjectID()
  newTuit.likes = 0;
  newTuit.liked = false;
  newTuit.retuits = 0;
  newTuit.replies = 0;
  const insertedTuit = await tuitsDao.createTuit(newTuit)
  res.json(insertedTuit);
}
const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate,updates);
  res.sendStatus(status);

}
const deleteTuit = async (req, res) => {
  const tuitsIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitsIdToDelete);
  res.sendStatus(status);
}


export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}