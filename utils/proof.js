const crypto = require('crypto');


// kole sakhti block chain be haminjast :
// inja mikhaim baraye har block ye proof dorost konim
// in proofi ke generate mikonim, be nesbat e proof e ghabli , age
// tafavoteshoon ro hash konim bayad 6 ta 0 motavali dashte bashe
// age na ke bayad dobare generate konim
  
const generateProof = (previousProof) => new Promise((resolve) =>{
    setImmediate(async ()=>{
        let proof = Math.random() * 10000000001;
        const dontMine = process.env.BREAK;
        if(isProofValid(previousProof, proof) || dontMine == 'true'){
            resolve({proof, dontMine});
        } else {
            resolve(await generateProof(previousProof));
        }
    });
});


//! inja check mikonim ke proof e ghabli ba proof e alan yeksan bashe :
const isProofValid = (previousProof, currentProof) => {
    const difference = currentProof - previousProof;
    const proofString = `difference-${difference}`;
    const hashFunction = crypto.createHash('sha256');
    hashFunction.update(proofString);
    const hexString = hashFunction.digest('hex');
    if (hexString.includes('000000')) {
        return true;
    }
    return false;
  };
  
exports.generateProof = generateProof;
exports.isProofValid = isProofValid;