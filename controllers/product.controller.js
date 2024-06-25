const product = require('../models/productmodels')


const getproducts = async (req,res)=>{
    try{
        const productall = await product.find({});
        res.status(200).json(productall)
  
      }catch(e){
          res.status(500).json({message:e.message})
      }
}

const getproduct = async (req,res)=>{
try{
    const {id} = req.params;
    const Product = await product.findById(id);
    res.status(200).json(Product)
  }catch(e){
      res.status(500).json({message:e.message})
  }
}

const createproduct = async (req,res)=>{
    try{
        const products =  await product.create(req.body)
        res.status(200).json(products)
  
      }catch(e){
          res.status(500).json({message:e.message})
      }
}

const updateproduct = async (req,res)=>{
    try{
        const {id} = req.params;
        const upproduct = await product.findByIdAndUpdate(id,req.body);

        if(!upproduct){
           return res.status(404).json({message:"Product not found"});

        }
        const updatedproduct = await product.findById(id);
        res.status(200).json(updatedproduct)

    }catch(e){
        res.status(500).json({message:e.message})
    }
}

const deleteproduct = async (req,res)=>{
    try {
        const {id} = req.params;
       const  dproduct = await product.findByIdAndDelete(id);
        if (!dproduct) {
        return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
        } catch (error) {
        res.status(500).json({ message: error.message });
        }
}
module.exports = {
    getproducts,
    getproduct,
    createproduct,
    updateproduct,
    deleteproduct

}