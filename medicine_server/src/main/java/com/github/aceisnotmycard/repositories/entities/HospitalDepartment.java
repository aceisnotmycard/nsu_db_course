package com.github.aceisnotmycard.repositories.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "hospital_departments")
public class HospitalDepartment implements BaseEntity<HospitalDepartment> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="department_id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name="hospital_id")
    private Facility facility;

    @OneToMany
    @JoinColumn(name="specialization_id")
    private List<DepartmentSpecialization> specializations;

    public Integer getId() {
        return id;
    }

    public Facility getFacility() {
        return facility;
    }

    @Override
    public void copy(HospitalDepartment entity) {
        this.setFacility(entity.getFacility());
        this.setSpecializations(entity.getSpecializations());
    }

    public void setFacility(Facility facility) {
        this.facility = facility;
    }

    public List<DepartmentSpecialization> getSpecializations() {
        return specializations;
    }

    public void setSpecializations(List<DepartmentSpecialization> specializations) {
        this.specializations = specializations;
    }

    public HospitalDepartment(Facility facility, List<DepartmentSpecialization> specializations) {

        this.facility = facility;
        this.specializations = specializations;
    }

    public HospitalDepartment() {}
}
