import React, { useState } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalForm.css'
import EmployeeManager from '../../modules/EmployeeManager';
import EmployeeOption from '../../components/employee/EmployeeOption';
import EmployeeList from '../../components/employee/EmployeeList';

const AnimalForm = props => {

    const [animal, setAnimal] = useState({ name: "", breed: "", employeeId: ""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = {...animal};
        stateToChange[evt.target.id] = evt.target.value;
        setAnimal(stateToChange);
    };

    const constructNewAnimal = evt => {
        evt.preventDefault();
        if (animal.name === "" || animal.breed === "") {
            window.alert("Please input an animal name and breed");
        } else {
            setIsLoading(true);
            AnimalManager.post(animal)
                .then(() => props.history.push("/animals"));
        }
    };

    // const getEmployees = () => {
    //     // After the data comes back from the API, we
    //     //  use the setEmployees function to update state
    //     return EmployeeManager.getAll().then(employeesFromAPI => {
    //       setEmployees(employeesFromAPI)
    //     });
    //   };

    // const populateEmployeeSelect = evt => {
    //     evt.preventDefault();
    //     getEmployees(employees =>
    //         employees.map(employee =>
    //             <EmployeeOption
    //             ))
    // }

/* <div className="container-cards">
        {animals.map(animal => 
          <AnimalCard 
          key={animal.id} 
          animal={animal}
          deleteAnimal={deleteAnimal} />
        )}
*/

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="name"
                            placeholder="Animal name"
                        />
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="breed"
                            placeholder="Breed"
                        />
                        <label htmlFor="breed">Breed</label>
                        {/* <select id="name" name="employee">
                            {EmployeeList.getEmployees(employees =>
                            employees.map(employee =>
                            <EmployeeOption/>))}
                        </select> */}

                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewAnimal}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default AnimalForm