const uuid = require("uuid");
const path = require("path");
const { Device, DeviceInfo } = require("../models/models");
const ApiError = require("../error/ApiError");
// const { model } = require("../db");

class DevicController {
    async create(req, res, next) {
        try {
            const { name, price, brandId, typeId } = req.body;
            console.log(req.body);
            const { img } = req.files;
            let fileName = uuid.v4() + ".jpk";
            img.mv(path.resolve(__dirname, "..", "static", fileName));
            const device = await Device.create(
                {
                    name,
                    price,
                    brandId: Number(brandId),
                    typeId: Number(typeId),
                    img: fileName
                }
            );
            res.json(device);
        } catch (e) {
            next(ApiError.bedRequest(e.message));
        }
    }

    async getAll(req, res) {
        const { brandId, typeId } = req.query;
        let device;
        if (!brandId && !typeId) {
            device = await Device.findAll();
        }
        if (brandId && !typeId) {
            device = await Device.findAll({
                where: { brandId }
            });
        }
        if (!brandId && typeId) {
            device = await Device.findAll({
                where: { typeId }
            });
        }
        if (brandId && typeId) {
            device = await Device.findAll({
                where: { typeId, brandId }
            });
        }

        return res.json(device);
    }

    async getOne(req, res) {
        const { id } = req.params;
        console.log(id);
        const device = await Device.findOne({
            where: { id },
            include: [{ model: DeviceInfo,as:"device_infos"}]
        });

        return res.json(device);

    }
}

module.exports = new DevicController();