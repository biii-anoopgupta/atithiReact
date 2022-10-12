import React from 'react'
import './Table.css'
export default function Devices() {

  const DevicesList = [
    {
      DeviceId: "1",
      DevicePrice: "90k",
      DeviceBranch: "Noida",
      DeviceManufacturing: "22/10/2000"
    },
    {
      DeviceId: "2",
      DevicePrice: "90k",
      DeviceBranch: "Noida",
      DeviceManufacturing: "22/10/2000"
    },
    {
      DeviceId: "3",
      DevicePrice: "90k",
      DeviceBranch: "Noida",
      DeviceManufacturing: "22/10/2000"
    },
    {
      DeviceId: "4",
      DevicePrice: "90k",
      DeviceBranch: "Noida",
      DeviceManufacturing: "22/10/2000"
    },
    {
      DeviceId: "5",
      DevicePrice: "90k",
      DeviceBranch: "Noida",
      DeviceManufacturing: "22/10/2000"
    },
  ]

  return (
    <div>


      <>
        <table className='styled-table' width={"100%"}>
          <thead>
            <tr>
              <th >
                Device Id:
              </th>
              <th>
                Device Branch:
                {console.log(DevicesList)}
              </th>
              <th>
                Device Price
              </th>
              <th>
                Device manufacturing:

              </th></tr>
          </thead>
          <tbody>
            {DevicesList.map((val) => {
              return (

                <tr className='active-row'>
                  <td >
                    {val.DeviceId}
                  </td>
                  <td>
                    {val.DeviceBranch}
                  </td>
                  <td>
                    {val.DevicePrice}
                  </td>
                  <td>
                    {val.DeviceManufacturing}
                  </td>
                </tr>
              )
            })}</tbody>
        </table>

        <div style={{ position: "fixed", bottom: 10, right: 10, backgroundColor: "white", height: 90, width: 90 }}>
          <i class="fas fa-heart"></i>
        </div>

      </>



    </div>
  )
}
