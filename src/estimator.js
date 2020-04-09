  const inputData = {
            region: {
                name: "Africa",
                avgAge: 19.7,
                avgDailyIncomeInUSD: 5,
                avgDailyIncomePopulation: 0.71
            },
            periodType: "days",
            timeToElapse: 58,
            reportedCases: 674,
            population: 66622705,
            totalHospitalBeds: 1380614
        }
        const covid19ImpactEstimator = (data) => {
            const outputData = {
                data: {
                    inputData
                },
                impact: {
                    currentlyInfected: () => {
                        const currentlyInfected =data.reportedCases * 10;
                        return currentlyInfected;
                    },
                    infectionsByRequestedTime: () => {

                        let infectionsByRequestedTime=outputData.impact.currentlyInfected()* 1024;

                        return infectionsByRequestedTime;
                    },
                    severeCasesByRequestedTime: ()=>{
                        let severeCasesByRequestedTime =  outputData.impact.infectionsByRequestedTime()  * 0.15;
                       return severeCasesByRequestedTime;
                   },
                   hospitalBedsByRequestedTime: ()=>{
                    let availableBeds = 0.35 * data.totalHospitalBeds;
                    let totalImpactInfection = outputData.impact.severeCasesByRequestedTime();
                    let  hospitalBedsByRequestedTime =Math.floor(availableBeds -totalImpactInfection );
                  return hospitalBedsByRequestedTime;
                   },
                casesForICUByRequestedTime: ()=>{
                    const icuCases = 0.05 * outputData.impact.infectionsByRequestedTime();
                    return  icuCases;

                    }  ,
                    casesForVentilatorsByRequestedTime:()=>{
                        const casesForVentilators =0.02 *  outputData.impact.infectionsByRequestedTime();
                               return casesForVentilators;
                           },
                           dollarsInFlight: () =>{
                            let dollarsInFlight =  outputData.impact.infectionsByRequestedTime() * data.region.avgDailyIncomePopulation* data.region.avgDailyIncomeInUSD*30;
                              
                             return  dollarsInFlight;
           
                           }
                
                
                },
                severeImpact: {
                    currentlyInfected: () => {
                        const currentlyInfected =  data.reportedCases * 50;
                        return currentlyInfected;
                    },
                    infectionsByRequestedTime: () => {
                        let totalSevereImpact =outputData.severeImpact.currentlyInfected();
                        let infectionsByRequestedTime =totalSevereImpact * 1024;
                        return  infectionsByRequestedTime; 
                    },
                    severeCasesByRequestedTime: ()=>{
                         let totalSevereImpactInfection =  outputData.severeImpact.infectionsByRequestedTime();
                         let    severeCasesByRequestedTime =  totalSevereImpactInfection  * 0.15;
                        return severeCasesByRequestedTime;
                        
                    },
                    hospitalBedsByRequestedTime: ()=>{
                        let availableBeds = 0.35 * data.totalHospitalBeds;
                        
                        let totalSevereImpactInfection = outputData.severeImpact.severeCasesByRequestedTime();
                        let  hospitalBedsByRequestedTime =Math.floor(availableBeds -totalSevereImpactInfection);
                      return  hospitalBedsByRequestedTime;
                    },
                    casesForICUByRequestedTime: ()=>{
                    const icuCases = 0.05 * outputData.severeImpact.infectionsByRequestedTime();
                    return  icuCases;

                    },
                    casesForVentilatorsByRequestedTime:()=>{
                 const casesForVentilators =0.02 *  outputData.severeImpact.infectionsByRequestedTime();
                        return casesForVentilators
                    },
                    dollarsInFlight: () =>{
                        dollarsInFlight = outputData.severeImpact.infectionsByRequestedTime() * data.region.avgDailyIncomePopulation* data.region.avgDailyIncomeInUSD*30;
                      return  dollarsInFlight; 
                      
    
                    }

                }
                
            };
           


            console.log(` 
        Number of currently infected impact cases: ${outputData.impact.currentlyInfected()}
        Number of currently infected severe impact cases: ${outputData.severeImpact.currentlyInfected()}}
        Number of  infectionsByRequestedTime for impact cases: ${outputData.impact.infectionsByRequestedTime()}
        Number of infectionsByRequestedTime for severe impact cases: ${outputData.severeImpact.infectionsByRequestedTime()}
        Number of severe cases by requested time for impact cases: ${outputData.impact.severeCasesByRequestedTime()}
        Number of severe cases by requested time for severe impact cases: ${outputData.severeImpact.severeCasesByRequestedTime()}
        Number of beds available for impact cases: ${outputData.impact.hospitalBedsByRequestedTime()}
        Number of beds available for severe impact cases: ${outputData.severeImpact.hospitalBedsByRequestedTime()}
        Nuumber of icu cases for impact cases: ${outputData.impact.casesForICUByRequestedTime()}
        Number of icu cases for severe impact cases: ${outputData.severeImpact.casesForICUByRequestedTime()}
        Cases that require ventilators for impact cases: ${outputData.impact.casesForVentilatorsByRequestedTime()}
        Cases that require ventilators for severe cases: ${outputData.severeImpact.casesForVentilatorsByRequestedTime()}
        Economy loses for impact cases: ${outputData.impact.dollarsInFlight()}
        Economy loses for severe impact cases: ${outputData.severeImpact.dollarsInFlight()}
  


            
            `)
        }

        covid19ImpactEstimator(inputData)
  
        export default covid19ImpactEstimator;