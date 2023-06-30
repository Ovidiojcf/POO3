import ITransportFactory from "../transport/interfaces/ITransportFactory";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicles";

export default class Client{
    private vehicle: ILandVehicle;
    private aircraft: IAircraft;

    constructor(factory: ITransportFactory){
        this.vehicle = factory.createTranportVehicle();
        this.aircraft = factory.createTransportIAircraft();
    }

    startRoute(): void {
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }
}