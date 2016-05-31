package com.github.aceisnotmycard.repositories.entities;

import jdk.nashorn.internal.runtime.Specialization;

import javax.persistence.*;
import javax.print.Doc;

@Entity
@Table(name = "doctors")
public class Doctor implements BaseEntity<Doctor> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    public Integer getId() {
        return id;
    }

    @Column(name = "name")
    private String name;

    @ManyToOne
    @JoinColumn(name = "specialization_id")
    private DoctorSpecialization specialization;

    @Column(name = "is_candidate")
    private Boolean isCandidate;

    @Column(name = "is_professor")
    private Boolean isProfessor;

    @Column(name = "is_associate")
    private Boolean isAssociate;

    @Column(name = "is_md")
    private Boolean isMd;

    public Doctor() {
    }

    public Doctor(String name, DoctorSpecialization specialization,
                  Boolean isCandidate, Boolean isProfessor, Boolean isAssociate, Boolean isMd) {
        this.name = name;
        this.specialization = specialization;
        this.isCandidate = isCandidate;
        this.isProfessor = isProfessor;
        this.isAssociate = isAssociate;
        this.isMd = isMd;
    }

    @Override
    public void copy(Doctor updated) {
        this.setName(updated.getName());
        this.setSpecialization(updated.getSpecialization());
        this.setAssociate(updated.getAssociate());
        this.setCandidate(updated.getCandidate());
        this.setProfessor(updated.getProfessor());
        this.setMd(updated.getMd());
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public DoctorSpecialization getSpecialization() {
        return specialization;
    }

    public void setSpecialization(DoctorSpecialization specialization) {
        this.specialization = specialization;
    }

    public Boolean getCandidate() {
        return isCandidate;
    }

    public void setCandidate(Boolean candidate) {
        isCandidate = candidate;
    }

    public Boolean getProfessor() {
        return isProfessor;
    }

    public void setProfessor(Boolean professor) {
        isProfessor = professor;
    }

    public Boolean getAssociate() {
        return isAssociate;
    }

    public void setAssociate(Boolean associate) {
        isAssociate = associate;
    }

    public Boolean getMd() {
        return isMd;
    }

    public void setMd(Boolean md) {
        isMd = md;
    }
}
