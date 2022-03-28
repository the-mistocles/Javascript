// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  function pAequorFactory(number, dnaBase){
    return {
      specimenNum: number,
      dna: dnaBase,
      mutate(){
        let randIndex = Math.floor(Math.random()*15);
        console.log(`random  = ${randIndex}`);
        let randBase = this.dna[randIndex];
        if(randBase === 'A'){
          let mutateTo = ['T', 'C', 'G'];
          randBase = mutateTo[Math.floor(Math.random()*3)];
          this.dna[randIndex] = randBase;
        } else if(randBase === 'T'){
          let mutateTo = ['A', 'C', 'G'];
          randBase = mutateTo[Math.floor(Math.random()*3)];
          this.dna[randIndex] = randBase;
        } else if(randBase === 'C'){
          let mutateTo = ['T', 'A', 'G'];
          randBase = mutateTo[Math.floor(Math.random()*3)];
          this.dna[randIndex] = randBase;
        } else if(randBase === 'G'){
          let mutateTo = ['T', 'C', 'A'];
          randBase = mutateTo[Math.floor(Math.random()*3)];
          this.dna[randIndex] = randBase;
        }
      },
  
      compareDNA(pAequor){
          let common = [];
          console.log(`specimen #2: ${pAequor}`);
          for(let i = 0; i < this.dna.length; i++){
              for(let j= 0; j< pAequor.length; j++){
                  if(i===j){
                      if(this.dna[i] === pAequor[j]){
                          common.push(this.dna[i]);
                      }
                  }
              }
          }
  
          commonPer = Math.floor(common.length/this.dna.length * 100);
          console.log(`Common Bases: ${common}`);
          console.log(`Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${commonPer}% DNA in common`);
      },
  
      willLikelySurvive(){
          let sum = 0;
          for(let i = 0; i < this.dna.length; i++){
              if(this.dna[i] === 'C' || this.dna[i]==='G'){
                sum += 1;
              }
            }
            
            let per = Math.floor(sum/this.dna.length * 100);
            //console.log(per);
          if(per >= 60){
              return true;
          }else{
              return false;
          }
  
          
      }
  
    }
  }
  
  let survivors = [];
  let number = 1;
  while(survivors.length < 30){
      let specimen = pAequorFactory(number, mockUpStrand());
      if(specimen.willLikelySurvive() === true){
          survivors.push(specimen);
      }
      number += 1;
  }
  
  console.log(survivors.length);
  
  // let species1 = pAequorFactory(1, mockUpStrand());
  // console.log(species1.dna);
  // species1.mutate();
  // species1.compareDNA(mockUpStrand());
  //console.log(species1.dna);
  
  
  
  
  
  
  
  