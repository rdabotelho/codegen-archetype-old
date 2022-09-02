package com.example.demo.domain.dto;

import java.util.ArrayList;
import java.util.List;

public class DomainNameDTO {

	private Long id;
	private String attribute;
	private OtherDTO attribute;
	private List<OtherDTO> attribute = new ArrayList<>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAttribute() {
		return attribute;
	}

	public void setAttribute(String attribute) {
		this.attribute = attribute;
	}

	public OtherDTO getAttribute() {
		return attribute;
	}

	public void setAttribute(OtherDTO attribute) {
		this.attribute = attribute;
	}

	public List<OtherDTO> getAttribute() {
		return attribute;
	}

	public void setAttribute(List<OtherDTO> attribute) {
		this.attribute = attribute;
	}

	@Override
	public String toString() {
		return "DomainNameDTO{" +
			"id=" + id +
			'}';
	}

}
