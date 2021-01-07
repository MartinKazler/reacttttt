import { useEffect, useState } from "react";
import Employee from "./Employee";

function EmployeeList() {
    const [employess, setEmployess] = useState([{
            name: "Martin Kasra",
            email: "kztsuyoki@gmail.com",
            phone: "0723685084",
            skills: "c++, java",
            avatar: "https: //i.imgur.com/Q9qFt3m.png",

        },
        {
            name: "Jakop dallas",
            email: "jakopdallas@gmail.com",
            phone: "072549630",
            skills: "Pyton c++",
            avatar: "https://i.imgur.com/t9HFQvX.png",
        },
    ]);

    function handleAddNewEmp() {
        setEmployess((prevState) => {
            return [
                ...prevState,
                {
                    name: "Lisa Lister",
                    email: "LEgirl@hotmail.com",
                    phone: "0742347403",
                    skills: "LiveStreaming",
                    avatar: "https://i.imgur.com/TUhCrsY.png",
                },
            ];
        });
    }

    return ( <
            >
            <
            h3 > EmployeeList < /h3> <
            button className = "button"
            onClick = { handleAddNewEmp } >
            Add Employee <
            /button> {
            employess.map((employee) => ( <
                Employee EmployeeData = { employee }
                />
            ))
        } <
        />
);
}

export default EmployeeList;