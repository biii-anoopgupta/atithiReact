import { Component, useEffect, useState } from "react";
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
import axios from "axios";
import { useLocation } from "react-router-dom";
import CommonList from "./CommonList";
export default function BranchUI() {
    const [BranchList, setBranchList] = useState([]);
    console.log(sessionStorage.getItem("x-access-token") + " session storeage")
    // const api = [1, 2, 3, 3, 5, 3];
    const api = "/api/branch/list";
    useEffect(() => {
        try {
            axios.get("http://localhost:3111" + api, {
                headers: {
                    "x-access-token": sessionStorage.getItem("x-access-token"),
                }
            }).then((res) => {
                setBranchList(res.data.branches)
            })
        } catch (err) {
            console.log(err)
        }
    }, [])


    return (
        <div>

            <AddBranch></AddBranch>

            <CommonList MyList={BranchList}></CommonList>





        </div>
    )
}

//Add Branch from here
function AddBranch() {
    const location = useLocation()
    const [basicModal, setBasicModal] = useState(false);
    const [BranchId, setBranchId] = useState();
    const [Address, setaddress] = useState("");
    const [GST, setGST] = useState("");
    const [CompanyId, setCompanyId] = useState();
    const [Name, setName] = useState("");

    const toggleShow = () => setBasicModal(!basicModal);



    const api = "/api/branch/create";
    var BranchData = {
        data:
        {
            "branch_id": BranchId,
            "name": Name,
            "address": Address,
            "gst": GST,
            "fk_company_id": CompanyId,
        }

    }
    const handleSubmit = async (e) => {
        console.log(location.state.token)
        e.preventDefault();
        try {
            axios.post("http://localhost:3111" + api, BranchData, {
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
            <MDBBtn style={{ marginLeft: "84%", }} onClick={toggleShow}>Add Branch</MDBBtn>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent> <form onSubmit={handleSubmit}>
                        <MDBModalHeader>
                            <MDBModalTitle>Add Branch</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBProgressBar backgroundColor="blue" ></MDBProgressBar>

                            {/* manager */}
                            <label>BranchId</label>
                            <MDBInput
                                onChange={(e) => { setBranchId(e.target.value) }}
                            />
                            <label>CompanyId</label>
                            <MDBInput
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
                            <MDBBtn type="submit">Save changes</MDBBtn>
                        </MDBModalFooter>  </form>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}
