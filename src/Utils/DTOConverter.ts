class DTOConverter {
    toEntity<DTO extends Object, ENTITY extends Object>(dto: DTO, entity: ENTITY): ENTITY {
        let response = entity;
        Object.keys(dto).forEach((k) => {
            if(Object.keys(entity).includes(k)) {
                // @ts-ignore
                response = { ...response, [k]: dto[k]};
            }
            if(Object.keys(entity).includes(`_${k}`)) {
                // @ts-ignore
                response = { ...response, [k]: dto[k]};
            }
        })
        return response;
    }
}

export default new DTOConverter();
