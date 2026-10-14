function existsEntity(res, entity, success) {
    if(entity === null || entity.length == '' || entity.customer === null && entity.vehicle.deletedCount == 0) {
        res.status(404).json({
            status: 404,
            message: 'Entity not found',
        });
    } else {
        res.status(200).json({
            status: 200,
            message: success,
            entity,
        });
    };
};

export default existsEntity;