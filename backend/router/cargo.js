const express=require("express")
const router=express.Router();
const{
    getAllContainer,
    getContainerByID,
    addContainer,
    updateContainerByID,
    deleteContainerByID
}=require('../controller/cargo');

router.get('/:coll',getAllContainer)
router.get('/:coll/:Id',getContainerByID)
router.post('/:coll',addContainer)
router.put('/:coll/:Id',updateContainerByID)
router.delete('/:coll/:Id',deleteContainerByID)

module.exports=router