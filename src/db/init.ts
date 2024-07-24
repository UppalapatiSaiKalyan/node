 import Language1 from './models/test1';

async function init(){
    const isDev = true;

  
    await Language1.sync({alter:isDev})
    
}

const dbInit =() => {
    init();
}

export default dbInit;