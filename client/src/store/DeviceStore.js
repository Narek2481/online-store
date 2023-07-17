import { makeAutoObservable } from "mobx"

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: "Phone" },
            { id: 2, name: "loptop" },
            { id: 3, name: "TV" }
        ]
        this._brands = [
            { id: 1, name: "Sumsung" }, 
            { id: 2, name: "Apple" },
            { id: 3, name: "Lenovo" },
            { id: 4, name: "Asus" },
        ]
        this._devices = [
            {id:1,name:"12 pro max "},
            {id:2,name:"12 pro max "},
            {id:3,name:"12 pro max "},
            {id:4,name:"12 pro max "}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }
    setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices;
    }
    setSelectedType(type) {
        this._selectedType = type;
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }
    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }
    get selectedType() {
        return this._selectedType;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }
}