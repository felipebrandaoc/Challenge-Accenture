let vehicleData = {
    "make": "Nissan",
    "model": "Scooter",
    "cylinderCapacity": 25,
    "enginePerformance": 40,
    "dateOfManufacture": "06/12/2022",
    "numberOfSeats": '5',
    "rightHandDrive": "yes",
    "numberOfSeatsMotorcycle": "3",
    "fuel": "Gas",
    "payload": 300,
    "totalWeight": 3000,
    "listPrice": 2000,
    "licensePlateNumber": "AAA-9999",
    "annualMileage": 1000
};

class vehicle {

    setVehicleData() {
        // Selecting Make
        cy.get('select[id="make"]').select(vehicleData.make)
        // Selecting Model
        cy.get('select[id="model"]').select(vehicleData.model)
        // Typing Cylinder Capacity
        cy.get('input[id="cylindercapacity"]').type(vehicleData.cylinderCapacity)
        // Typing Engine Performance
        cy.get('input[id="engineperformance"]').type(vehicleData.enginePerformance)
        // Typing Date of Manufacture
        cy.get('input[id="dateofmanufacture"]').type(vehicleData.dateOfManufacture)
        // Selecting Number of Seats
        cy.get('select[id="numberofseats"]').select(vehicleData.numberOfSeats)
        // Selecting driver hand - Depends on the param (yes or no)
        if(vehicleData.rightHandDrive == "yes") {
            cy.get('input[id="righthanddriveyes"]').click({force: true})
        } else if (vehicleData.rightHandDrive == "no") {
            cy.get('input[id="righthanddriveno"]').click({force: true})
        }
        
        // Selecting Number of Seats Motorcycle
        cy.get('select[id="numberofseatsmotorcycle"]').select(vehicleData.numberOfSeatsMotorcycle)
        // Selecting Fuel Type
        cy.get('select[id="fuel"]').select(vehicleData.fuel)
        // Typing Payload
        cy.get('input[id="payload"]').type(vehicleData.payload)
        // Typing Total Weight
        cy.get('input[id="totalweight"]').type(vehicleData.totalWeight)
        // Typing List Price
        cy.get('input[id="listprice"]').type(vehicleData.listPrice)
        // Typing License Plate Number
        cy.get('input[id="licenseplatenumber"]').type(vehicleData.licensePlateNumber)
        // Typing Annual Mileage
        cy.get('input[id="annualmileage"]').type(vehicleData.annualMileage)
    }
}

export default new vehicle();
