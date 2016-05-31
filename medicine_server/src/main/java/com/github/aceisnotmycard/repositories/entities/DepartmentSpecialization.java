package com.github.aceisnotmycard.repositories.entities;


import javax.persistence.*;

@Entity
@Table(name="department_specializations")
public class DepartmentSpecialization {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="specialization_id")
    private Integer id;

    @Column(name="name")
    private String name;

    public DepartmentSpecialization(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public DepartmentSpecialization() {}
}
