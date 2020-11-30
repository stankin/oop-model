class CalcData {

  constructor() {
    this.resultFPA = new Map();
    this.resultCOCOMO = new Map();
  }


/* START FPA IFPUG METHOD */

  //VAF function
  getVAF(array){
    let sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }

    return (sum * 0.01) + 0.65;
  }

  //AFP function
  getAFP(UFP, VAF){
    return UFP*VAF;
  }

  //AFP function
  getAFP(UFP, VAF){
    return UFP*VAF;
  }

  //DFP function
  //CFP - функциональные точки, подсчитанные для дополнительной функциональности,
  //которая потребуется при установке продукта, например, миграции данных.
  getDFP(UFP, CFP = 0, VAF){
    return (UFP + CFP) * VAF;
  }

  //SLOC function
  getSLOC(language, DFP){
    return language*DFP;
  }

/* END - FPA IFPUG METHOD */

/* START - COCOMO II METHOD */

  //SF function
  getSF(array){
    let SF = 0;
    for (let i = 0; i < array.length; i++) {
      SF += array[i];
    }
    return SF;
  }

  //E function
  getE(SF){
    return 0.91+0.01*SF;
  }

  //EM function
  getEM(array){
    let EM = 1;
    for (let i = 0; i < array.length; i++) {
      EM *= array[i];
    }
    return EM;
  }

  //PM function
  getPM(SLOC, E, EM){
     return 2.94 * Math.pow(Math.round(SLOC / 1000), E) *  EM;
  }

  //TDEV function
  getTDEV(PM, SF){
     return 3.67 * Math.pow(PM, 0.28+0.02*0.01*SF);
  }

/* END - COCOMO II METHOD */

// MAIN BODY
  calcFPA(array, language) {
    let VAF = this.getVAF(array);
    //What is UFP???
    let UFP = 14;
    let AFP = this.getAFP(UFP, VAF);
    let DFP = this.getDFP(UFP, 0, VAF);
    let SLOC = this.getSLOC(language, DFP);
    let KLOC = Math.round(SLOC/1000);
    this.resultFPA = ([
    ["VAF", VAF], ["UFP", UFP], ["AFP", AFP], ["DFP", DFP], ["SLOC", SLOC], ["KLOC", KLOC]
    ]);
  }

  calcCOCOMO2(array1, array2) {
    let SF = this.getSF(array1);
    let E = this.getE(SF);
    let EM = this.getEM(array2);
    let PM = this.getPM(2, E, EM);
    let TDEV = this.getTDEV(PM, SF);
    this.resultCOCOMO = ([
    ["SF", SF], ["E", E], ["EM", EM], ["PM", PM], ["TDEV", TDEV]
    ]);
  }
}
