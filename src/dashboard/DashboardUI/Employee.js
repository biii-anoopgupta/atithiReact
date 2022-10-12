
import './Table.css'

export default function Employee() {

    var Emplist = [
        {
            firstName: "John",
            email: "anoop.gupta@biii.in",
            userId: 50,
            BranchName: "Noida 62",
            Post: "Boss",
            Location: "Noida"
        },

        {
            firstName: "rohit",
            email: "anoop.gupta@biii.in",
            userId: 51,
            BranchName: "Noida 62",
            Post: "Boss",
            Location: "Noida"
        },
        {
            firstName: "ram",
            email: "anoop.gupta@biii.in",
            userId: 54,
            BranchName: "Noida 62",
            Post: "Boss",
            Location: "Noida"

        },
        {
            firstName: "ram",
            email: "anoop.gupta@biii.in",
            userId: 54,
            BranchName: "Noida 62",
            Post: "Boss",
            Location: "Noida"

        },
        {
            firstName: "ram",
            email: "anoop.gupta@biii.in",
            userId: 54,
            BranchName: "Noida 62",
            Post: "Boss",
            Location: "Noida"

        },
        {
            firstName: "ram",
            email: "anoop.gupta@biii.in",
            userId: 54,
            BranchName: "Noida 62",
            Post: "Boss",
            Location: "Noida"

        },
    ]


    return (


        <div>


            <div>
                <table className="styled-table" style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th >
                                Name
                            </th>
                            <th>Email</th>
                            <th> Branch Name</th>
                            <th>  User Id</th>
                            <th> Post</th>
                            <th>Location</th></tr>
                    </thead> <tbody>
                        {Emplist.map(emp => {

                            return (

                                <tr className="active-row" >
                                    <td>
                                        <p>  {emp.firstName}</p>
                                    </td>
                                    <td>
                                        {emp.email}
                                    </td>
                                    <td>
                                        {emp.userId}
                                    </td>
                                    <td>
                                        {emp.BranchName}
                                    </td>
                                    <td>
                                        {emp.Post}
                                    </td>
                                    <td>
                                        {emp.Location}
                                    </td>
                                </tr>)
                        }
                        )
                        }</tbody>


                </table>



                {/* <div><img style={{backgroundColor: "blue", height : "80px", width: "80px", backgroundRepeat: "no-repeat" }}  
            src='https://media.architecturaldigest.com/photos/629e210f465483047fb1edc1/master/pass/1393956289' alt=''/></div> */}


            </div>

        </div>
    )
}