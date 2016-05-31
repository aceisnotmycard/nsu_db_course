package com.github.aceisnotmycard.contollers;

import com.github.aceisnotmycard.repositories.DoctorRepository;
import com.github.aceisnotmycard.repositories.DoctorSpecializationRepository;
import com.github.aceisnotmycard.repositories.entities.Doctor;
import com.github.aceisnotmycard.repositories.entities.DoctorSpecialization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/doctors")
public class DoctorController extends BaseController<Doctor, DoctorRepository> {

    private DoctorSpecializationRepository specRepo;

    @Autowired
    public DoctorController(DoctorRepository repo, DoctorSpecializationRepository specRepo) {
        super(repo);
        this.specRepo = specRepo;
    }

    @Override
    public Doctor create(@RequestBody Doctor doc) {
        return super.create(doc);
    }
}

