import axios from 'axios'
import {useEffect, useRef, useState} from 'react'
import './Part2.css'
import './calculator.css'
// fi
// 

const bake2 = {
    coursename:"e.g. ANA 301",
    test:"your test score",
    exam:"your exam score",
    agg:"your agg",
    grade:"your grade",
    check:true,
    type: "text",
    courseload: "units for each course",
    valve: "no",
    confirm: false
    
}

export function Part() {
   const testRef2 = useRef(null)
   const examRef2 = useRef(null)
   const aggRef2 = useRef(null)
   const courseloadRef2 = useRef(null)
   const gradeRef2 = useRef(null)
   const alphaRef2 = useRef(null)
   const courseRef2 = useRef(null)


const [run, setrun] = useState([])
const [trial, setTrial] =  useState()
    
    const [tab2, setTAB2] = useState([bake2])
    const [coursed2,setcoursed2] = useState([])
    const [grades2,setgrades2] = useState([])

//     useEffect (()=>{
// courseRef2.current.focus()
// }
//     , [courseloadRef2])

    function handler(e) {
        if (e.code == "Enter") {
            const rowss2 = {
                check: false,
                type: "number",
                confirm: true
             
               }
            setTAB2([...tab2, rowss2])
            
       }

    }
    



const sum = ()=>{

    const reducer = (accumulator, currentvalue) => parseInt(accumulator) +  parseInt(currentvalue) 
  const  AggVal = coursed2.reduce(reducer)
   const  CourseVal = grades2.reduce(reducer)
   const GP = parseFloat(parseFloat(AggVal) / parseFloat(CourseVal)).toFixed(2)
    alert("your g.p. is " + " " +  GP  + " " + "with a total courseload of" + " " + CourseVal + " " + "and an aggregate of" + " "+ parseFloat(AggVal))
setrun(...run , CourseVal)
console.log(CourseVal);

}


// const calms =(e)=>{
//     async function came(){

//     const promise = new Promise((resolve, reject) => {
//         if(examRef2.current.value != " your exam score" && examRef2.current.value.length > -1 && examRef2.current.value.length <3){
// setTimeout(() => {
//     resolve(e.target.value )

// }, 1000);
//      }} ) 
// const examVal = await promise

// setTimeout(() => {
//     aggRef2.current.value = parseFloat(parseFloat(examVal) + parseFloat(testRef2.current.value)).toFixed(1)
   

//   if(courseloadRef2.current !==" " ){
//       setgrades2([...grades2, courseloadRef2.current.value])
//       console.log(grades2);
//   }



// }, 900); 
// const grader = new Promise((resolve, reject) => {
//     resolve (setTimeout(() => {
//         if(aggRef2.current.value > -1 && aggRef2.current.value < 45  ){
//             gradeRef2.current.value = "F"
           
            
//                 }
//         else if(aggRef2.current.value >44 && aggRef2.current.value < 50){
//     gradeRef2.current.value = "D"
//         }
//         else if(aggRef2.current.value > 49 && aggRef2.current.value< 60){
//     gradeRef2.current.value = "C"
//         }
//         else if (aggRef2.current.value > 59 && aggRef2.current.value < 70){
//     gradeRef2.current.value = "B"
//         }
//         else if (aggRef2.current.value > 69 && aggRef2.current.value < 101){
//     gradeRef2.current.value = "A"
//         }
//     }, 1000))
// })

// const Waiter = await grader
// setTimeout(() => {
//     const [F,D,C,B,A] = [1,2,3,4,5]
    
//     if(gradeRef2.current.value == "F"){
//         setcoursed2([  ...coursed2,  F * courseloadRef2.current.value]);

//     }
//     if(gradeRef2.current.value == "D"){
//         setcoursed2([  ...coursed2,  D * courseloadRef2.current.value]);

//     }
//     if(gradeRef2.current.value == "C"){
//         setcoursed2([  ...coursed2,  C * courseloadRef2.current.value]);

//     }
//     if(gradeRef2.current.value == "B"){
//         setcoursed2([  ...coursed2,  B * courseloadRef2.current.value]);

//     }
//     if(gradeRef2.current.value == "A"){
//         setcoursed2([  ...coursed2,  A * courseloadRef2.current.value]);

//     }
// }, 1000);
// }
// came()

// }

const yam = (index)=>{
    return ""
}

const soak = (e,index)=>{
    return e.target.value = index + "jj"
// sessionStorage.setItem(index, tab2[index].course )
}

// useEffect(()=>{
//     setTrial(tab2[index].course)
//     sessionStorage.setItem(index, tab2[index].course )
// },[tab2])

const jik = (index)=>{
setTrial("")
}

 <div>{"div"}</div>
    return (
<>

        <div className="Part2">


            <table>

                <thead>

                    <tr>
                       <th>2nd SEMESTER COURSES</th>
                       <th>COURSE UNIT</th>
                        <th>TEST</th>
                        <th>EXAM</th>
                        <th>AGG</th>
                        <th>GRADE
                        </th>
                    </tr>
                </thead>

                <tbody>

       
 {tab2.map((valued,index)=>{
    return(   
        <> 
        <tr key={index}>
            <td><input   onKeyDown={handler} onInput={(e)=>soak(e,index)}    autoFocus ={valued.confirm} /></td>
            <td><input  value= {valued.courseload}  ref={courseloadRef2} onKeyDown={handler}  onChange={(e)=> valued.courseload= e.target.value} /></td>
            <td><input value = {valued.test}   onKeyDown={handler} onChange = {(e)=>valued.test= e.target.value} /></td>
            <td><input value = {valued.exam}   onChange={(e)=> e.target.value}  onKeyDown={handler}/></td>
            <td><input value = {valued.agg}   readOnly = {true}  onKeyDown={handler} ></input></td>
            <td><input value = {valued.grade}    onChange={(e)=> valued.grade= e.target.value}     onKeyDown={handler}/> </td>  
      <td><button onClick={()=>jik(index)}>Clear</button></td>
        </tr>

        </>
        
       )

 })}

                </tbody>
                
                
                

            


                


 </table>






 <button className='initiate' onClick={sum}>SUM</button>
 <input value = {run} onChange = {(e)=> e = 54}  />
 <div>
 <h5>some more task
    <p>connect with my sql</p>
    <p>styling, github and deploy</p>
 </h5>

 </div>





 
        </div>
        




</> )
}


export function Table(){
    const [data,setData] = useState([
      { id:1, course : "", courseUnit: "", test:"", exam:"", aggregate:"", grade:""},
      { id:2, course : "", courseUnit: "", test:"", exam:"", aggregate:"", grade:""},
      {id:3, course : "", courseUnit: "", test:"", exam:"", aggregate:"", grade:""},
      { id:4, course : "", courseUnit: "", test:"", exam:"", aggregate:"", grade:""},
      {id:5, course : "", courseUnit: "", test:"", exam:"", aggregate:"", grade:""},
      {id:6, course : "", courseUnit: "", test:"", exam:"", aggregate:"", grade:""},


])

const [gpData, setgpData] = useState(
    
{ "100 level 1st": "" , "100 level 2nd":"", "200 level 1st": "", "200 level 2nd":"", "300 level 1st":"", "300 level 2nd":"", "400 level 1st":"",
"400 level 2nd" : "", "500 level 1st": "", "500 level 2nd":""


},

    
)



const alpRef = useRef(null)
const alpRef1 = useRef(null)
const alpRef2= useRef(null)
const alpRef3 = useRef(null)
const alpRef4= useRef(null)
const alpRef5 = useRef(null)
const alpRef6 =useRef(null)
const alpRef7 = useRef(null)
const alpRef8 = useRef(null)
const alpRef9 = useRef(null)


const CourseChanger=(e,id,fields)=>{
const why = data.map(coursed=>{
if(coursed.id === id ){

return {...coursed, [fields]: e.target.value}
}

 localStorage.setItem("course" + id, e.target.value)

return coursed
})

 
setData(why)

}



const addItem = ()=>{
    const man = {
        id:data.length + 1, course : "", courseUnit: "", test:"", exam:"", aggregate:"", grade:""

    }
   
    console.log(man);

   
   setData([...data , man]) 


    
}
 const TestChanger =(e, id )=>{
    const mask =   data.map(
        calm=>{
if (calm.id === id){
    if(calm.exam!==""){
        localStorage.setItem("aggregate"+ " "+id,parseFloat(e.target.value)+ parseFloat(calm.exam) )
    }
    return {...calm, "test":e.target.value, "aggregate":parseFloat(e.target.value)+ parseFloat(calm.exam)}
}

 localStorage.setItem("test"+ " "+id, e.target.value)
return calm

        }
    )
setData(mask)
 }
 const ExamChanger=(e,id)=>{
    const mask =   data.map(
        calm=>{
            const sum = parseFloat(e.target.value) + parseFloat(calm.test)

if (calm.id === id  ){
    localStorage.setItem("sum", sum)
    const getSum = localStorage.getItem("sum")

if(getSum > 69 && getSum < 101){
    localStorage.setItem("grade" + " "+id, "A")
    calm.grade = localStorage.getItem("grade" + " "+id)
}


else if(getSum> 59 && getSum<70){
    localStorage.setItem("grade" + " "+id, "B")
    calm.grade = localStorage.getItem("grade" + " "+id)
}


else if(getSum> 49 && getSum<60){
    localStorage.setItem("grade" + " "+id, "C")
    calm.grade = localStorage.getItem("grade" + " "+id)
}


else if(getSum> 39 && getSum<50){
    localStorage.setItem("grade" + " "+id, "D")
    calm.grade = localStorage.getItem("grade" + " "+id)
}


else if(getSum> 29 && getSum<40){
    localStorage.setItem("grade" + " "+id, "E")
    calm.grade = localStorage.getItem("grade" + " "+id)
}

else if(getSum> 19 && getSum<30){
    localStorage.setItem("grade" + " "+id, "F")
    calm.grade = localStorage.getItem("grade" + " "+id)
}
else{
    calm.grade = ""
}

localStorage.setItem("exam"+ " "+id, e.target.value)
localStorage.setItem("aggregate"+ " "+id,parseFloat(e.target.value) + parseFloat(calm.test))



return {...calm, "exam":e.target.value, "aggregate":sum}

}




return calm

        }
    )
setData(mask)
 }
 

const AggregateChanger=(e,id)=>{


}


const GradeChanger=(e,id)=>{

}



const CourseUnitChangers = (e, id , field)=>{

    const pave =    data.map(
            calm=>{
if (calm.id === id ){
  return  {...calm,  [field]: e.target.value }

}
localStorage.setItem("course unit"+ " "+id, JSON.stringify(e.target.value))
return calm
            }
        )
        setData(pave)
   
    }
const previousData = ()=>{
    let man = "no localStorage"

    const ump = 
    data.map(

        
        items=>{
   
            const id = items.id
            const courseUnitStorage = localStorage.getItem("course unit"+ " "+id)
            const parsedCourseUnitStorage = courseUnitStorage ? JSON.parse(courseUnitStorage) : ""

         console.log(localStorage.getItem("exam"+ " "+id));   
            console.log(localStorage.getItem("aggregate"+ " "+id))
            console.log(localStorage.getItem("test"+ " "+id))
           console.log( localStorage.getItem("course unit"+ " "+id))
           

            if(localStorage.getItem("exam"+ " "+id)  && localStorage.getItem("aggregate"+ " "+id)  && localStorage.getItem("test"+ " "+id) && localStorage.getItem("course unit"+ " "+id) ){
                // return  {...items , course : localStorage.getItem("course" + id), courseUnit : parsedCourseUnitStorage, "test": localStorage.getItem("test"+ " "+id),
                // "exam": localStorage.getItem("exam"+ " "+id), aggregate: localStorage.getItem("aggregate"+ " "+id), grade: localStorage.getItem("grade"+ " "+id)
                // }
           man = "localStorage"
                items.aggregate = localStorage.getItem("aggregate"+ " "+id)
                items.course = localStorage.getItem("course" + id)
                items.courseUnit = parsedCourseUnitStorage
                items.grade = localStorage.getItem("grade"+ " "+id)
                items.exam = localStorage.getItem("exam"+ " "+id)
                items.test = localStorage.getItem("test"+ " "+id)

                return items
            }
            else{
                return items

            }
          

                
                }


    )
    if(man == "no localStorage"){
        alert("You have no previous data, try calculating your gp first")

    }

    setData(ump)

}

let summedUp = []
let summedUnit = []
let gp = []
const SUM =()=>{
    
    data.forEach(
        calm=>{
            
            if(calm.grade == "A"&& calm.courseUnit!==""){
                console.log(5 * parseFloat(calm.courseUnit));
                summedUp.push(5 * parseFloat(calm.courseUnit))

            }
            else if (calm.grade == "B" && calm.courseUnit!==""){
                console.log(4 * parseFloat(calm.courseUnit));
                summedUp.push(4 * parseFloat(calm.courseUnit))

            }
            else if (calm.grade == "C" && calm.courseUnit!==""){
                console.log(3 * parseFloat(calm.courseUnit));
                summedUp.push(3 * parseFloat(calm.courseUnit))
            }
            else if (calm.grade == "D" && calm.courseUnit!==""){
                console.log(2 * parseFloat(calm.courseUnit));
                summedUp.push(2 * parseFloat(calm.courseUnit))
            }
            else if (calm.grade == "E" && calm.courseUnit!==""){
                console.log(1 * parseFloat(calm.courseUnit));
                summedUp.push(1 * parseFloat(calm.courseUnit))
            }
            else if (calm.grade == "F" && calm.courseUnit!==""){
                console.log(0 * parseFloat(calm.courseUnit));
                summedUp.push(0 * parseFloat(calm.courseUnit))
            }
      
      console.log(summedUp);
     if(calm.courseUnit!==""&& calm.courseUnit!==null){
        summedUnit.push(calm.courseUnit)

     }
     
      console.log(summedUnit);

     

            return calm

        }
        )

        const reducer = (accumulator, currentvalue) => parseFloat(accumulator) +  parseFloat(currentvalue)
        const totalCourseUnit =   summedUnit.reduce(reducer)
      const courseUnitProduct = summedUp.reduce(reducer)
        
      alert("your gp is" + " "+ parseFloat(courseUnitProduct)/ parseFloat(totalCourseUnit) +"\n"+
      "with a total courseUnit of" + " " + totalCourseUnit +"\n"+ 
      "and a total courseUnit-grade-product of" + " " + courseUnitProduct)

      summedUnit = []
      summedUp=[]
      gp.push(parseFloat(courseUnitProduct)/ parseFloat(totalCourseUnit))

  
}

const SAVE =()=>{
    if(gp == ""){
return alert("click the gp button to first obtain gp")
    }
 console.log(gp);
 
 const make = prompt("what level is this. Reply in this format : 100, 200, 300, 400, 500 ...")
// const make = prompt(<input value = "sssssssss"/>)
 const maker = prompt("what semester. Reply in this format : 1st, 2nd ...")
 
if(make == "100" && maker == "1st"){
   
   alpRef.current.value = gp

}
else if(make == "100" && maker == "2nd"){
alpRef5.current.value = gp
}
else if(make == "200" && maker == "1st"){
alpRef1.current.value = gp
    }

else if(make == "200" && maker == "2nd"){
alpRef6.current.value = gp
}
else if(make == "300" && maker == "1st"){
alpRef2.current.value = gp
}
else if(make == "300" && maker == "2nd"){
alpRef7.current.value = gp
}
else if(make == "400" && maker == "1st"){
alpRef3.current.value = gp
}
else if(make == "400" && maker == "2nd"){
alpRef8.current.value = gp
}
else if(make == "500" && maker == "1st"){
alpRef4.current.value = gp
}
else if(make == "500" && maker == "2nd"){
alpRef9.current.value = gp
}
    



}

const del = ()=>{
    const way = 
    data.map(
        calm=>{
            const id = calm.id
if(calm.id || calm.aggregate || calm.course || calm.grade || calm.courseUnit|| calm.exam){
    localStorage.removeItem("exam"+ " "+id)
    localStorage.removeItem("test"+ " "+id)
    localStorage.removeItem("aggregate"+ " "+id)
    localStorage.removeItem("course unit"+ " "+id)
    localStorage.removeItem("grade"+ " "+id)
    localStorage.removeItem("course"+id)


return {...calm, course:"", test:"", exam:"", courseUnit:"", aggregate:"", grade:""}
}
return calm
        }
    )
    setData(way)
}


const test =()=>{
    data.map(
        calm=>{
            
            if(!localStorage){
                alert("kk")
               return calm
            }
            return calm
        }
    )
    alert("ffr")

}









// const HandleChange = (e,id,field)=>{
//         const updatedData = data.map(
//             item=>{
//                 if(item.id===id){
//                     return {...item, [field]: e.target.value}

//                 }
//                 return item

//             }
//         )
//         setData(updatedData) 
//     }

 
return (
    <>
    <table>
        <thead>
            <tr>
                <th>COURSES</th>
                <th>COURSE UNITS</th>
                <th>TEST SCORE</th>
                <th>EXAM SCORE</th>
                <th>AGGREGATE</th>
                <th>GRADE</th>
            </tr>
        </thead>
        <tbody>
            {data.map(items=>{

                return (
                <>
                 <tr key = {items.id}>
{/* <td>
     <input type = "text" value= {item.age} onChange={e=>HandleChange(e,item.id,"age")}/>
</td> */}
<td>
    <input type = "text" value = {items.course}  onChange={e=>CourseChanger(e,items.id,"course")} />
</td>

<td>
    <input type = "text" value={items.courseUnit} onChange={e=>CourseUnitChangers(e,items.id, "courseUnit")}/>
</td>
<td>
    <input type = "text"  value={items.test} onChange={e=>TestChanger(e,items.id,"test")}/>
</td>
<td>
    <input type = "text" value={items.exam} onInput={e=>ExamChanger(e,items.id,"exam")}/>
</td>
<td>
    <input type = "text" value ={items.aggregate} onChange={e=>e.target.value}/>
</td>
<td>
    <input type = "text" value={items.grade} onChange={e=>e.target.value}/> 
</td>
</tr>

                </>
                
                
                )
                

                }
                


                )
                
                }

        </tbody>

    </table >


    
  <div style={{display:"inline-flex"}}>
  <button style={{marginInline:"20px"}} onClick={ addItem}> ADD SOME ROWS</button>
<button style={{marginInline:"20px"}} onClick={previousData}>GET PREVIOUS DATA</button>
<button style={{marginInline:"20px"}} onClick={SUM}>CALMLY HIT TO GET GP!</button>
<button onClick={del}>DELETE ALL</button>


    </div>         

<div style={{display: "flex", marginBottom:"27px", marginTop:"52px"}}><h3 style={{marginRight: "4%"}}>SAVING YOUR RESULT FOR CUMULATIVE CALCULATION</h3> <button  onClick={SAVE}>CLICK TO SAVE YOUR CURRENT GP</button></div>



<table style={{marginBottom:"50px"}}>
    <thead>
        <tr>
            <th>level </th>
            <th>100 level </th>
            <th>200 level </th>
            <th>300 level </th>
            <th>400 level </th>
            <th>500 level </th>

        </tr>

    </thead>
    <tbody>
     


<tr style={{position: "relative", bottom:"4px"}} >
<td >1st semester gp</td>
<td><input placeholder='your gp' value= {gpData['100 level 1st']} ref={alpRef} /></td>
<td><input  placeholder='your gp' value={gpData['200 level 1st']}  ref={alpRef1}/></td>
<td><input  placeholder='your gp' value={gpData['300 level 1st']}ref={alpRef2}/></td>
<td><input  placeholder='your gp' value={gpData['400 level 1st']} ref={alpRef3}/></td>
<td><input  placeholder='your gp' value={gpData['500 level 1st']} ref={alpRef4} /></td>


 
</tr>




<tr style={{position: "relative", bottom:"30px"}} >
<td>2nd semester gp</td>
<td><input  placeholder='your gp'  value={gpData['100 level 2nd']} ref={alpRef5}/></td>
<td><input  placeholder='your gp' value={gpData['200 level 2nd']} ref={alpRef6}/></td>
<td><input  placeholder='your gp' value={gpData['300 level 2nd']}ref={alpRef7} /></td>
<td><input  placeholder='your gp' value={gpData['400 level 2nd']} ref={alpRef8}/></td>
<td><input  placeholder='your gp' value={gpData["500 level 2nd"]} ref={alpRef9}/></td>




</tr>












        

      
           

        
    </tbody>
    
</table >

    </>
)}