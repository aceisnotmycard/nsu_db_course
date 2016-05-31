package com.github.aceisnotmycard.contollers;

import com.github.aceisnotmycard.repositories.DoctorSpecializationRepository;
import com.github.aceisnotmycard.repositories.entities.DoctorSpecialization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/doctor-specializations")
public class DoctorSpecializationController extends BaseController<DoctorSpecialization, DoctorSpecializationRepository> {
    @Autowired
    public DoctorSpecializationController(DoctorSpecializationRepository repo) {
        super(repo);
    }
}
