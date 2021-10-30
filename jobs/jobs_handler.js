var requireDir = require('require-dir');
var jobs = requireDir('./declared_jobs');

// console.log(jobs)

let start_jobs=()=>{
    for (const key in jobs) {
        jobs[key].start()
        // console.log(key)`    
    }
    // jobs.forEach(job => {
    //     job.start()
    // });
}
module.exports=start_jobs