package com.github.aceisnotmycard.repositories.entities;

import javax.persistence.*;

@Entity
@Table(name = "facilities")
public class Facility implements BaseEntity<Facility> {

    @Id
    @Column(name = "facility_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "address")
    private String address;

    @Column(name = "is_clinic")
    private Boolean isClinic;

    @ManyToOne
    @JoinColumn(name = "parent_hospital_id")
    private Facility parentFacility;

    public Facility(String address, Boolean isClinic) {
        this.address = address;
        this.isClinic = isClinic;
    }

    public Facility getParentFacility() {
        return parentFacility;
    }

    public void setParentFacility(Facility parentFacility) {
        this.parentFacility = parentFacility;
    }

    public Facility() {}

    @Override
    public void copy(Facility entity) {
        if (entity.getClinic() == null) {
            this.setClinic(false);
        } else {
            this.setClinic(entity.getClinic());
        }
        this.setAddress(entity.getAddress());
        this.setParentFacility(entity.getParentFacility());
    }

    public Integer getId() {
        return id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Boolean getClinic() {
        return isClinic;
    }

    public void setClinic(Boolean clinic) {
        isClinic = clinic;
    }
}

