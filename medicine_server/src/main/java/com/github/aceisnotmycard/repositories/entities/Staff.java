package com.github.aceisnotmycard.repositories.entities;

import javax.persistence.*;

@Entity
@Table(name = "staff")
public class Staff implements BaseEntity<Staff> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @JoinColumn(name = "specialization_id")
    @ManyToOne
    private StaffSpecialization specialization;

    @JoinColumn(name = "facility_id")
    @ManyToOne
    private Facility facility;

    public Staff() {
    }

    public Staff(String name, StaffSpecialization specialization, Facility facility) {
        this.name = name;
        this.specialization = specialization;
        this.facility = facility;
    }

    @Override
    public void copy(Staff entity) {
        this.setSpecialization(entity.getSpecialization());
        this.setName(entity.getName());
        this.setFacility(entity.getFacility());
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public StaffSpecialization getSpecialization() {
        return specialization;
    }

    public void setSpecialization(StaffSpecialization specialization) {
        this.specialization = specialization;
    }

    public Facility getFacility() {
        return facility;
    }

    public void setFacility(Facility facility) {
        this.facility = facility;
    }
}
