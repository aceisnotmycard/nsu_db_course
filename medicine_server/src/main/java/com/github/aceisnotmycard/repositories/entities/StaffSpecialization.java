package com.github.aceisnotmycard.repositories.entities;

import javax.persistence.*;

@Entity
@Table(name="staff_specializations")
public class StaffSpecialization implements BaseEntity<StaffSpecialization> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="specialization_id")
    private Integer id;

    @Column(name="name")
    private String name;

    public StaffSpecialization(String name) {
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

    public StaffSpecialization() {}

    @Override
    public void copy(StaffSpecialization entity) {
        setName(entity.getName());
    }
}
