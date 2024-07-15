const Client = require("./reservoirClient");
const mintToken=async(tokenData)=>{
    try {
        const response = await Client.mintToken({
            chainId: 1,
            ...tokenData,
        });
        console.log('Minted',response);
        return response
        
    } catch (error) {
        console.error(error)

        
    }
}
module.exports = mintToken