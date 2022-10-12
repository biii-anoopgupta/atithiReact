import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaBeer } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput,
    MDBProgressBar,
} from 'mdb-react-ui-kit';
import { useLocation } from 'react-router-dom';


const CommonList = (props) => {

    return (
        <div>


            <table className='styled-table' width={"100%"}>
                <thead>
                    <tr>
                        <th >
                            Branch Id:


                        </th>
                        <th>
                            Location:

                        </th>
                        <th>
                            GST
                        </th>
                        <th>
                            Company name

                        </th>
                        <th>
                            edit

                        </th>
                        <th>
                            delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.MyList.map((val) => {
                        return (


                            <tr key={val.id} className='active-row'> <td >
                                {val.branch_id}

                            </td>
                                <td>
                                    {val.address}
                                </td>
                                <td>
                                    {val.gst}
                                </td>
                                <td>
                                    {val.fk_company_id}
                                </td>
                                <td>
                                    <EditData branch={val.branch_id}></EditData>
                                </td>
                                <td>
                                    <div><DeleteData></DeleteData></div>

                                </td>
                            </tr>

                        )

                    })}</tbody>
            </table>
        </div>
    )
}


function EditData(props) {
    const [basicModal, setBasicModal] = useState(false);
    const [BranchId, setBranchId] = useState(props.branch);
    const [Address, setaddress] = useState("");
    const [GST, setGST] = useState("");
    const [CompanyId, setCompanyId] = useState(1);
    const [Name, setName] = useState("");

    const toggleShow = () => setBasicModal(!basicModal);



    const api = "/api/branch/update";
    var BranchData = {
        branch:
        {
            "branch_id": BranchId,
            "name": Name,
            "address": Address,
            "gst": GST,
            "fk_company_id": CompanyId,
        }

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            axios.put("http://localhost:3111" + api, BranchData, {
                headers: {
                    "x-access-token": sessionStorage.getItem("x-access-token")
                }
            }).then((res) => {
                console.log(BranchData)
                console.log(res.data)
            }
            )
        } catch (err) {

        }
    }

    return (
        <>
            <MDBBtn color='success' onClick={toggleShow}><AiFillEdit /> </MDBBtn>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent> <form onSubmit={handleSubmit}>
                        <MDBModalHeader>
                            <MDBModalTitle>Edit Branch</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBProgressBar backgroundColor="blue" ></MDBProgressBar>

                            {/* manager */}
                            <label>BranchId</label>
                            <MDBInput
                                onChange={(e) => { setBranchId(e.target.value) }}
                                value={props.branch}
                            />
                            <label>CompanyId</label>
                            <MDBInput
                                value={CompanyId}
                                onChange={(e) => { setCompanyId(e.target.value) }}
                            />
                            {/* manager */}
                            <label>Name</label>
                            <MDBInput
                                onChange={(e) => { setName(e.target.value) }}
                            />
                            {/* Location  */}
                            <label>Location</label>
                            <MDBInput
                                onChange={(e) => { setaddress(e.target.value) }}
                            />
                            {/* GST */}
                            <label>GST</label>

                            <MDBInput
                                onChange={(e) => { setGST(e.target.value) }}
                            />





                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShow}>
                                Close
                            </MDBBtn>
                            <MDBBtn type="submit" onClick={toggleShow}>Save changes</MDBBtn>
                        </MDBModalFooter>  </form>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}


//delete data currently not working, for it modify backend code first
function DeleteData(props) {
    const [basicModal, setBasicModal] = useState(false);
    const [BranchId, setBranchId] = useState(props.branch);
    const [Address, setaddress] = useState("");
    const [GST, setGST] = useState("");
    const [CompanyId, setCompanyId] = useState(1);
    const [Name, setName] = useState("");

    const toggleShow = () => setBasicModal(!basicModal);



    const api = "/api/branch/update";
    var BranchData = {
        branch:
        {
            "branch_id": BranchId,
            "name": Name,
            "address": Address,
            "gst": GST,
            "fk_company_id": CompanyId,
        }

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            axios.put("http://localhost:3111" + api, BranchData, {
                headers: {
                    "x-access-token": sessionStorage.getItem("x-access-token")
                }
            }).then((res) => {
                console.log(BranchData)
                console.log(res.data)
            }
            )
        } catch (err) {

        }
    }

    return (
        <>
            <MDBBtn color='warning' onClick={toggleShow}><FaBeer ></FaBeer> </MDBBtn>


            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent> <form onSubmit={handleSubmit}>
                        <MDBModalHeader>
                            <MDBModalTitle>
                                delete Branch</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>

                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShow}>
                                Close
                            </MDBBtn>
                            <MDBBtn type="submit" onClick={toggleShow}>Save changes</MDBBtn>
                        </MDBModalFooter>  </form>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}
export default CommonList;