package com.example.demo.model;

import javax.persistence.*;
import java.time.*;
import com.example.demo.enums.*;

@Entity
@Table(name = "ENTITY")
public class Entity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "ATTRIBUTE")
	private String attribute;

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

}
