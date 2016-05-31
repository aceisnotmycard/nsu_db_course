package com.github.aceisnotmycard.repositories.entities;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "patients")
public class Patient implements BaseEntity<Patient> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "birth_date")
    private Date birthDate;

    @Column(name = "is_male")
    private boolean isMale;

    public Patient() {}

    public Patient(String name, Date birthDate, boolean isMale) {
        this.name = name;
        this.birthDate = birthDate;
        this.isMale = isMale;
    }

    @Override
    public void copy(Patient e) {
        this.setMale(e.isMale());
        this.setBirthDate(e.getBirthDate());
        this.setName(e.getName());
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public boolean isMale() {
        return isMale;
    }

    public void setMale(boolean male) {
        isMale = male;
    }
}
