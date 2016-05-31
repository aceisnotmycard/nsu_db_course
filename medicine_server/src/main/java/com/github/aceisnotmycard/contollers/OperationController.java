package com.github.aceisnotmycard.contollers;


import com.github.aceisnotmycard.repositories.DoctorRepository;
import com.github.aceisnotmycard.repositories.FacilityRepository;
import com.github.aceisnotmycard.repositories.MedicalRecordRepository;
import com.github.aceisnotmycard.repositories.OperationRepository;
import com.github.aceisnotmycard.repositories.entities.Doctor;
import com.github.aceisnotmycard.repositories.entities.Facility;
import com.github.aceisnotmycard.repositories.entities.MedicalRecord;
import com.github.aceisnotmycard.repositories.entities.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/operations")
public class OperationController extends BaseController<Operation, OperationRepository> {
    private DoctorRepository docRepo;
    private FacilityRepository facRepo;
    private MedicalRecordRepository recordRepo;

    @Autowired
    public OperationController(OperationRepository repo, DoctorRepository docRepo,
                               FacilityRepository facRepo, MedicalRecordRepository recordRepo) {
        super(repo);
        this.docRepo = docRepo;
        this.facRepo = facRepo;
        this.recordRepo = recordRepo;
    }

    @Override
    public Operation create(@RequestBody Operation op) {
        Optional<Doctor> surgeon = docRepo.findByName(op.getSurgeon().getName());
        Optional<Facility> facility = facRepo.findByAddress(op.getFacility().getAddress());
        MedicalRecord record = recordRepo.findOne(op.getRecord().getId());
        if (surgeon.isPresent() && facility.isPresent()) {
            op.setSurgeon(surgeon.get());
            op.setFacility(facility.get());
            op.setRecord(record);
            return super.create(op);
        } else {
            return null;
        }
    }
}
