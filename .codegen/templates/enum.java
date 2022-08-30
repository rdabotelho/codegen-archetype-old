package com.example.demo.enums;

public enum Enumeration {

	VALUE("Value")

    private String description;

	Enumeration(String description) {
	     this.description = description;
	}

	public String getValue() {
		return name();
	}

    public String getDescription() {
        return description;
    }

}
