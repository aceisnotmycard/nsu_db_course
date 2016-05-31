package com.github.aceisnotmycard.contollers;

import com.github.aceisnotmycard.repositories.PatientRepository;
import com.github.aceisnotmycard.repositories.entities.Patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/patients")
public class PatientController extends BaseController<Patient, PatientRepository> {

    @Autowired
    public PatientController(PatientRepository repo) {
        super(repo);
    }
}
