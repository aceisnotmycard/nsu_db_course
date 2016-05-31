package com.github.aceisnotmycard.repositories.entities;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "lab_facility")
public class LabFacility implements BaseEntity<LabFacility> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "facility_id")
    private Facility facility;

    @ManyToOne
    @JoinColumn(name = "lab_id")
    private Lab lab;

    @Column(name = "start_date")
    private Date startDate;

    @Column(name = "end_date")
    private Date endDate;

    public LabFacility() {
    }

    public LabFacility(Facility facility, Lab lab, Date startDate, Date endDate) {
        this.facility = facility;
        this.lab = lab;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Facility getFacility() {
        return facility;
    }

    @Override
    public void copy(LabFacility entity) {
        this.setFacility(entity.getFacility());
        this.setLab(entity.getLab());
        this.setStartDate(entity.getStartDate());
        this.setEndDate(entity.getEndDate());
    }

    public void setFacility(Facility facility) {
        this.facility = facility;
    }

    public Lab getLab() {
        return lab;
    }

    public void setLab(Lab lab) {
        this.lab = lab;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
}
