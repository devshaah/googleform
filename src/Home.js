import React, { useState } from "react";
import { Input, Radio, Space } from "antd";
import { Checkbox } from "antd";
import { Select } from "antd";
import {HiOutlineUpload} from 'react-icons/hi'
import {BsCloudArrowUp} from 'react-icons/bs'
import {BiErrorCircle} from 'react-icons/bi'
const Home = () => {
  const [value, setValue] = useState(0);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const [mcq,setmcq] = useState("")
  const [checkbox,setcheckbox] = useState([])
  const [ans,setans] = useState("")
  const [para,setpara] = useState("")
  const [drop,setdrop] = useState("")
  const [scale,setscale] = useState(0)
  const [gridr1,setgridr1] = useState("")
  const [gridr2,setgridr2] = useState("")
  const [gridr3,setgridr3] = useState("")
  const [tickr1,settickr1] = useState([])
  const [tickr2,settickr2] = useState([])
  const [tickr3,settickr3] = useState([])

  const [err,seterr] = useState(false)
  const [success,setsuccess] = useState(false)

  const checkarray = (array,setarray,int) => {
    if (array.includes(int)) {
        setarray(array.filter((obj) => obj !== int));
      } else {
        setarray([...array, int]);
      }
      console.log(array);
  }

  const handleSubmit = () => {
    if(mcq === "") {seterr(true)}
    if(ans === "") {seterr(true)}
    if(para === "") {seterr(true)}
    if(drop === "") {seterr(true)}
    if(gridr1 === "") {seterr(true)}
    if(gridr2 === "") {seterr(true)}
    if(gridr3 === "") {seterr(true)}
    if(scale === 0) {seterr(true)}
    if(tickr1.length === 0) {seterr(true)}
    if(tickr2.length === 0) {seterr(true)}
    if(tickr3.length === 0) {seterr(true)}
    if(checkbox.length === 0) {seterr(true)}

    if ( !(mcq === "") && !(ans === "") && !(para === "") && !(drop === "") && !(gridr1 === "") && !(gridr2 === "") && !(gridr3 === "") && !(scale === 0) && !(tickr1.length === 0) && !(tickr2.length === 0) && !(tickr3.length === 0) && !(checkbox.length === 0) )
    {setsuccess(true)}
  }

  const clearform = () => {
    window.location.reload()
  }


  return (
    <div className="bg-[#f0ebf8] w-full h-full flex items-center justify-center flex-col pt-5">
      <div className="bg-white  rounded-[10px] overflow-hidden text-left w-[90%] md:w-2/5 lg:w-1/3">
        <div className="bg-[#673ab7] h-[10px]"></div>
        <div className="py-2 px-6 w-full text-left">
          <p className="mb-0 text-[30px] font-[400] ">Assignment Task</p>
        </div>
        <div className="px-6 py-2 border-y-[1px] border-[#e1dbdb] ">
          <div className="flex items-center justify-between">
            <p className="mb-0 text-[blue]">
              <b className="text-[black] font-[500]">name@gmail.com</b> Switch Accounts{" "}
            </p>
            <BsCloudArrowUp className="text-[20px]"/>
          </div>
          <p className="mb-0 mt-[20px] text-[14px] text-[#5f5c5b]">
            The name and photo associated with your Google Account will be
            recorded when you upload files and submit this form. Your email
            address is not part of your response.
          </p>
        </div>
        <div className="px-6 py-2">
          <p className="mb-0 text-[red]">* Indicates required question</p>
        </div>
      </div>

      <div className={`mt-5 rounded-lg bg-white px-6 py-6 w-[90%] md:w-2/5 lg:w-1/3 text-left ${err && mcq === "" && "border-[1px] border-red-500"} `}>
  <p className="mb-4 md:mb-6">
    MCQ <b className="text-red-500">*</b>
  </p>
  <div>
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1} onClick={() => setmcq(1)}>
          Option 1
        </Radio>
        <Radio value={2} onClick={() => setmcq(2)}>
          Option 2
        </Radio>
        <Radio value={3} onClick={() => setmcq(3)}>
          Option 3
        </Radio>
      </Space>
    </Radio.Group>
  </div>
  {err && mcq === "" && (
    <div className="flex items-center my-4 gap-2">
      <BiErrorCircle className="text-red-500" />
      <p className="mb-0 text-red-500">This is a required question</p>
    </div>
  )}
</div>


      <div className={`mt-5 rounded-[10px] bg-white px-6 py-6 w-[90%] md:w-2/5 lg:w-1/3 text-left  ${ err && (checkbox.length === 0) && "border-[1px] border-[red]"}  `}>
        <p className="mb-[20px] ">
          Checkbox <b className="text-[red]">*</b>
        </p>
        <div className="flex flex-col gap-[15px]">
          <Checkbox onClick={()=>checkarray(checkbox,setcheckbox,1)}>Option 1</Checkbox>
          <Checkbox onClick={()=>checkarray(checkbox,setcheckbox,2)}>Option 2</Checkbox>
          <Checkbox onClick={()=>checkarray(checkbox,setcheckbox,3)}>Option 3</Checkbox>
        </div>
        {
            err && (checkbox.length === 0) && 
            <div className="flex items-center justify-start my-4 gap-2">
                <BiErrorCircle className="text-[red]"/>
                <p className="mb-0 text-[red]">This is a required question</p>
            </div>
        }
      </div>

      <div className={`mt-5 rounded-[10px] bg-white px-6 py-6 w-[90%] md:w-2/5 lg:w-1/3 text-left  ${ err && (ans === "") && "border-[1px] border-[red]"}  `}>
        <p className="mb-[20px] ">
          Short Answer <b className="text-[red]">*</b>
        </p>
        <input
          type="text"
          placeholder="Your Answer"
          className="w-[50%] text-[14px] outline-none border-b-[1px] border-[#e1dbdb] "
          onChange={(event)=>setans(event.target.value)}
        />
        {
            err && (ans === "") && 
            <div className="flex items-center justify-start my-4 gap-2">
                <BiErrorCircle className="text-[red]"/>
                <p className="mb-0 text-[red]">This is a required question</p>
            </div>
        }
      </div>

      <div className={`mt-5 rounded-[10px] bg-white px-6 py-6 w-[90%] md:w-2/5 lg:w-1/3 text-left  ${ err && (para === "") && "border-[1px] border-[red]"}  `}>
        <p className="mb-[20px] ">
          ParaGraph <b className="text-[red]">*</b>
        </p>
        <input
          type="textarea"
          placeholder="Your Answer"
          className="w-[100%] text-[14px] outline-none border-b-[1px] border-[#e1dbdb] "
          onChange={(event)=>setpara(event.target.value)}
        />
         {
            err && (para === "") && 
            <div className="flex items-center justify-start my-4 gap-2">
                <BiErrorCircle className="text-[red]"/>
                <p className="mb-0 text-[red]">This is a required question</p>
            </div>
        }
      </div>

      <div className={`mt-5 rounded-[10px] bg-white px-6 py-6 w-[90%] md:w-2/5 lg:w-1/3 text-left  ${ err && (drop === "") && "border-[1px] border-[red]"}  `}>
        <p className="mb-[20px] ">
          Drop down <b className="text-[red]">*</b>
        </p>
        <Select
          placeholder="Choose"
          onClick={(value)=>setdrop(value)}
          style={{
            width: 120,
          }}
          options={[
            {
              value: "Option 1",
              label: "Option 1",
            },
            {
              value: "Option 2",
              label: "Option 2",
            },
            {
              value: "Option 3",
              label: "Option 3",
            },
          ]}
        />
         {
            err && (drop === "") && 
            <div className="flex items-center justify-start my-4 gap-2">
                <BiErrorCircle className="text-[red]"/>
                <p className="mb-0 text-[red]">This is a required question</p>
            </div>
        }
      </div>

      <div className={`mt-5 rounded-[10px] bg-white px-6 py-6 w-[90%] md:w-2/5 lg:w-1/3 text-left `}>
        <p className="mb-[20px] ">
          File Upload <b className="text-[red]">*</b>
        </p>
        <input
          type="file"
          id="fileInput"
          placeholder="Your Answer"
          className="w-[100%] text-[14px] outline-none border-b-[1px] border-[#e1dbdb] hidden "
        />
        <label for="fileInput" className="w-fit">
            <div className="p-2 border-[1px] rounded-[3px] border-[#e1dbdb] w-fit flex items-center justify-center gap-[5px]">

            <HiOutlineUpload className="text-[blue]"/>
          <p className="text-[blue] ">Add File</p>
            </div>
        </label>
      </div>

      <div className={`mt-5 rounded-[10px] bg-white px-6 py-6 w-[90%] md:w-2/5 lg:w-1/3 text-left  ${ err && (scale === 0) && "border-[1px] border-[red]"}  `}>
        <p className="mb-[20px] ">
          Linear Scale <b className="text-[red]">*</b>
        </p>
        <div>
            <div className="grid grid-cols-7">
                <div className="flex items-end">
                    <p className="mb-0">Worst</p>

                </div>
                <div className="flex flex-col items-center justify-center gap-[15px]">
                    <p className="mb-0 ">1</p>
                    <input type="radio" name="linear" onClick={()=>setscale(1)}/>
                </div>
                <div className="flex flex-col items-center justify-center gap-[15px]">
                    <p className="mb-0 ">2</p>
                    <input type="radio" name="linear" onClick={()=>setscale(2)}/>
                </div>
                <div className="flex flex-col items-center justify-center gap-[15px]">
                    <p className="mb-0 ">3</p>
                    <input type="radio" name="linear" onClick={()=>setscale(3)}/>
                </div>
                <div className="flex flex-col items-center justify-center gap-[15px]">
                    <p className="mb-0 ">4</p>
                    <input type="radio" name="linear" onClick={()=>setscale(4)}/>
                </div>
                <div className="flex flex-col items-center justify-center gap-[15px]">
                    <p className="mb-0 ">5</p>
                    <input type="radio" name="linear" onClick={()=>setscale(5)}/>
                </div>
                <div className="flex items-end">
                    <p className="mb-0">Best</p>

                </div>
            </div>
        </div>
        {
            err && (scale === 0) && 
            <div className="flex items-center justify-start my-4 gap-2">
                <BiErrorCircle className="text-[red]"/>
                <p className="mb-0 text-[red]">This is a required question</p>
            </div>
        }
      </div>



      <div className={`mt-5 rounded-[10px] bg-white px-6 py-6 w-[90%] md:w-2/5 lg:w-1/3 text-left  ${ err && (gridr1 === "" || gridr2 === "" || gridr3 === "") && "border-[1px] border-[red]"}  `}>
        <p className="mb-[20px] ">
          Multi Choice Grid  <b className="text-[red]">*</b>
        </p>
        <div className="grid grid-cols-4 items-center justify-center ml-10">
            <p className="mb-0"> </p>
            <p className="mb-0">  Column 1</p>
            <p className="mb-0">  Column 2</p>
            <p className="mb-0">  Column 3</p>
        </div>
        <div className="grid grid-cols-4 items-center justify-center bg-[#f8f9fa] px-6 py-3 rounded-[2px] my-2">
            <p className="mb-0">Row 1</p>
            <input type="radio" name="row1" onClick={()=>setgridr1(1)} />
            <input type="radio" name="row1"  onClick={()=>setgridr1(1)} />
            <input type="radio" name="row1" onClick={()=>setgridr1(1)} />
        </div>
        <div className="grid grid-cols-4 items-center justify-center bg-[#f8f9fa] px-6 py-3 rounded-[2px] my-2">
            <p className="mb-0">Row 2</p>
            <input type="radio" name="row2" onClick={()=>setgridr2(2)} />
            <input type="radio" name="row2" onClick={()=>setgridr2(2)} />
            <input type="radio" name="row2" onClick={()=>setgridr2(2)} />
        </div>
        <div className="grid grid-cols-4 items-center justify-center bg-[#f8f9fa] px-6 py-3 rounded-[2px] my-2">
            <p className="mb-0">Row 3</p>
            <input type="radio" name="row3"  onClick={()=>setgridr3(3)} />
            <input type="radio" name="row3" onClick={()=>setgridr3(3)} />
            <input type="radio" name="row3" onClick={()=>setgridr3(3)} />
        </div>
        {
            err && (gridr1 === "" || gridr2 === "" || gridr3 === "" ) && 
            <div className="flex items-center justify-start my-4 gap-2">
                <BiErrorCircle className="text-[red]"/>
                <p className="mb-0 text-[red]"> This question requires at least one response per row</p>
            </div>
        }
      </div>

      <div className={`mt-5 rounded-[10px] bg-white px-6 py-6 w-[90%] md:w-2/5 lg:w-1/3 text-left  ${ err && (tickr1.length === 0 || tickr2.length === 0 || tickr3.length === 0) && "border-[1px] border-[red]"}  `}>
        <p className="mb-[20px] ">
          Tick Box Grid  <b className="text-[red]">*</b>
        </p>
        <div className="grid grid-cols-4 items-center justify-center ml-10">
            <p className="mb-0 md:mb-2"> </p>
            <p className="mb-0 md:mb-2"> Column 1</p>
            <p className="mb-0 md:mb-2"> Column 2</p>
            <p className="mb-0 md:mb-2"> Column 3</p>
        </div>
        <div className="grid grid-cols-4 items-center justify-center bg-[#f8f9fa] px-6 py-3 rounded-[2px] my-2">
            <p className="mb-0">Row 1</p>
            <input type="checkbox" name="row1" onClick={()=>checkarray(tickr1,settickr1,1)}/>
            <input type="checkbox" name="row1" onClick={()=>checkarray(tickr1,settickr1,2)}/>
            <input type="checkbox" name="row1" onClick={()=>checkarray(tickr1,settickr1,3)}/>
        </div>
        <div className="grid grid-cols-4 items-center justify-center bg-[#f8f9fa] px-6 py-3 rounded-[2px] my-2">
            <p className="mb-0">Row 2</p>
            <input type="checkbox" name="row1" onClick={()=>checkarray(tickr2,settickr2,1)}/>
            <input type="checkbox" name="row1" onClick={()=>checkarray(tickr2,settickr2,2)}/>
            <input type="checkbox" name="row1" onClick={()=>checkarray(tickr2,settickr2,3)}/>
        </div>
        <div className="grid grid-cols-4 items-center justify-center bg-[#f8f9fa] px-6 py-3 rounded-[2px] my-2">
            <p className="mb-0">Row 3</p>
            <input type="checkbox" name="row1" onClick={()=>checkarray(tickr3,settickr3,1)}/>
            <input type="checkbox" name="row1" onClick={()=>checkarray(tickr3,settickr3,2)}/>
            <input type="checkbox" name="row1" onClick={()=>checkarray(tickr3,settickr3,3)}/>
        </div>
        {
            err && (tickr1.length === 0 || tickr2.length === 0 || tickr3.length === 0 ) && 
            <div className="flex items-center justify-start my-4 gap-2">
                <BiErrorCircle className="text-[red]"/>
                <p className="mb-0 text-[red]"> This question requires at least one response per row</p>
            </div>
        }
      </div>


    <div className="grid grid-cols-3 mt-4 w-[90%] md:w-2/5 lg:w-1/3 px-6 items-center justify-center ">
        <div className="bg-[#673ab7] w-fit px-3 py-2 cursor-pointer rounded-[10px] text-white" onClick={()=>handleSubmit()} >
            <p className="mb-0">Submit</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-[10px]">
            <div className="bg-[green] w-[100px] h-[10px] rounded-[20px]"></div>
            <p className="mb-0"><nobr>Page 1 of 1</nobr></p>
        </div>
        <div className="cursor-pointer" onClick={()=>clearform()}>
            <p className="mb-0 text-[#673ab7]">Clear Form</p>
        </div>

    </div>
    <div className="flex items-center justify-start mb-10 mt-2">
    <p className="text-[12px] font-[400] text-start ">Never submit passwords through Google Forms.</p>

    </div>
    </div>
  );
};

export default Home;
