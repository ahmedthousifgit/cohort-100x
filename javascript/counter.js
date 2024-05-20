function counter(){
    let c = 20
    const count = setInterval(()=>{
      console.log(c);
      c--
      if(c===0){
        clearInterval(count)
      }
    },1000) 
}
counter()