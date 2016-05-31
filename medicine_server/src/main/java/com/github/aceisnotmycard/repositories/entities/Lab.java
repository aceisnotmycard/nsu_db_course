package com.github.aceisnotmycard.repositories.entities;

import javax.persistence.*;

@Entity
@Table(name = "labs")
public class Lab implements BaseEntity<Lab> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="lab_id")
    private Integer id;

    @Column(name="name")
    private String name;

    @Column(name="biochemistry")
    private Boolean biochemistry;

    @Column(name="chemistry")
    private Boolean chemistry;

    @Column(name="physiology")
    private Boolean physiology;

    public Lab() {
    }

    public Lab(String name, Boolean biochemistry, Boolean chemistry, Boolean physiology) {
        this.name = name;
        this.biochemistry = biochemistry;
        this.chemistry = chemistry;
        this.physiology = physiology;
    }

    @Override
    public void copy(Lab entity) {
        this.setName(entity.getName());
        this.setBiochemistry(entity.getBiochemistry());
        this.setPhysiology(entity.getPhysiology());
        this.setChemistry(entity.getChemistry());
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getBiochemistry() {
        return biochemistry;
    }

    public void setBiochemistry(Boolean biochemistry) {
        this.biochemistry = biochemistry;
    }

    public Boolean getChemistry() {
        return chemistry;
    }

    public void setChemistry(Boolean chemistry) {
        this.chemistry = chemistry;
    }

    public Boolean getPhysiology() {
        return physiology;
    }

    public void setPhysiology(Boolean physiology) {
        this.physiology = physiology;
    }
}
