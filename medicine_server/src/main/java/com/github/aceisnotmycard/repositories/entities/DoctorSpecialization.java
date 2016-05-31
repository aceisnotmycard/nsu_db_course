package com.github.aceisnotmycard.repositories.entities;

import javax.persistence.*;

@Entity
@Table(name = "doctor_specializations")
public class DoctorSpecialization implements BaseEntity<DoctorSpecialization> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    public Integer getId() {
        return id;
    }

    @Column(name = "name")
    private String name;

    @Column(name = "salary_coef")
    private Float salaryCoef;

    @Column(name = "vacation_days")
    private Integer vacationDays;

    @Column(name = "is_surgeon")
    private Boolean isSurgeon;

    public DoctorSpecialization() {
    }

    public DoctorSpecialization(String name, Float salaryCoef, Integer vacationDays, Boolean isSurgeon) {
        this.name = name;
        this.salaryCoef = salaryCoef;
        this.vacationDays = vacationDays;
        this.isSurgeon = isSurgeon;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getSalaryCoef() {
        return salaryCoef;
    }

    public void setSalaryCoef(Float salaryCoef) {
        this.salaryCoef = salaryCoef;
    }

    public Integer getVacationDays() {
        return vacationDays;
    }

    public void setVacationDays(Integer vacationDays) {
        this.vacationDays = vacationDays;
    }

    public Boolean getSurgeon() {
        return isSurgeon;
    }

    public void setSurgeon(Boolean surgeon) {
        isSurgeon = surgeon;
    }

    @Override
    public void copy(DoctorSpecialization entity) {
        this.setVacationDays(entity.getVacationDays());
        this.setName(entity.getName());
        this.setSalaryCoef(entity.getSalaryCoef());
        this.setSurgeon(entity.getSurgeon());
    }
}
