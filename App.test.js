// const app = require('./src/patient/component')

// console.log('App Test is executed...')
// it("First Test Case", ()=>{
//     expect(true).toBeTruthy();
// })

// it("sum should be 10", ()=>{
//    let result = app
//    expect(result).toBe(10);
// });

// it("multiplicattion should be 25", () =>{
//     let res = app.multiply(5,5);
//     expect(res).toBe(25);
// })

const axios = require('./axiosConfig');

const addPatient = async (patient) => {
    const result = await axios.request({
        method: 'post',
        url: `http://localhost:9090/LIFELINE-api/LIFELINE/patient/addPatient`
    });
    const { data } = result;
    return data;
};