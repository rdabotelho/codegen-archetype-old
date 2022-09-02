package com.example.demo.domain.mapper;

import com.example.demo.domain.model.DomainName;
import com.example.demo.domain.dto.DomainNameDTO;
import java.util.stream.Collectors;

public class  DomainNameMapper {

	public static final DomainNameMapper INSTANCE = new DomainNameMapper();

	public DomainName toEntity(DomainNameDTO dto) {
		if (dto == null) return null;
		DomainName entity = new DomainName();
		entity.setId(dto.getId());
		entity.setAttribute(dto.getAttribute());
		entity.setAttribute(OtherMapper.INSTANCE.toEntity(dto.getAttribute()));
		entity.setAttribute(dto.getAttribute().stream().map(it -> OtherMapper.INSTANCE.toEntity(it)).collect(Collectors.toList()));
		return entity;
	}

	public DomainNameDTO toDTO(DomainName entity) {
		if (entity == null) return null;
		DomainNameDTO dto = new DomainNameDTO();
		dto.setId(entity.getId());
		dto.setAttribute(entity.getAttribute());
		dto.setAttribute(OtherMapper.INSTANCE.toDTO(entity.getAttribute()));
		dto.setAttribute(entity.getAttribute().stream().map(it -> OtherMapper.INSTANCE.toDTO(it)).collect(Collectors.toList()));
		return dto;
	}

}