package com.github.aceisnotmycard.contollers;

import com.github.aceisnotmycard.repositories.FacilityRepository;
import com.github.aceisnotmycard.repositories.LabFacilityRepository;
import com.github.aceisnotmycard.repositories.LabRepository;
import com.github.aceisnotmycard.repositories.entities.Facility;
import com.github.aceisnotmycard.repositories.entities.Lab;
import com.github.aceisnotmycard.repositories.entities.LabFacility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/lab-facility")
public class LabFacilityController extends BaseController<LabFacility, LabFacilityRepository> {
    private LabRepository labRepo;
    private FacilityRepository facilityRepo;

    @Autowired
    public LabFacilityController(LabFacilityRepository repo, LabRepository labRepository, FacilityRepository facilityRepo) {
        super(repo);
        this.labRepo = labRepository;
        this.facilityRepo = facilityRepo;
    }

    @Override
    public LabFacility create(@RequestBody LabFacility doc) {
        Optional<Facility> facility = facilityRepo.findByAddress(doc.getFacility().getAddress());
        Optional<Lab> lab = labRepo.findByName(doc.getLab().getName());
        if (lab.isPresent() && facility.isPresent()) {
            doc.setLab(lab.get());
            doc.setFacility(facility.get());
            return super.create(doc);
        } else {
            return null;
        }
    }
}
