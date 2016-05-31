package com.github.aceisnotmycard.repositories.entities;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "operations")
public class Operation implements BaseEntity<Operation> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "operation_id")
    private Integer id;

    @Column(name = "survived")
    private Boolean isSurvived;

    public Boolean getSurvived() {
        return isSurvived;
    }

    public void setSurvived(Boolean survived) {
        isSurvived = survived;
    }

    @Column(name = "date")
    private Date date;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @ManyToOne
    @JoinColumn(name = "facility_id")
    private Facility facility;

    public Facility getFacility() {
        return facility;
    }

    public void setFacility(Facility facility) {
        this.facility = facility;
    }

    @ManyToOne
    @JoinColumn(name = "record_id")
    private MedicalRecord record;

    public MedicalRecord getRecord() {
        return record;
    }

    public void setRecord(MedicalRecord record) {
        this.record = record;
    }

    @ManyToOne
    @JoinColumn(name = "surgeon_id")
    private Doctor surgeon;

    public Doctor getSurgeon() {
        return surgeon;
    }

    public void setSurgeon(Doctor surgeon) {
        this.surgeon = surgeon;
    }

    public Operation() {
    }

    public Operation(Boolean isSurvived, Date date, Facility facility, MedicalRecord record, Doctor surgeon) {
        this.isSurvived = isSurvived;
        this.date = date;
        this.facility = facility;
        this.record = record;
        this.surgeon = surgeon;
    }

    @Override
    public void copy(Operation entity) {
        setFacility(entity.getFacility());
        setDate(entity.getDate());
        setRecord(entity.record);
        setSurgeon(entity.surgeon);
        setSurvived(entity.getSurvived());
    }
}
