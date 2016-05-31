package com.github.aceisnotmycard.contollers;

import com.github.aceisnotmycard.repositories.DoctorRepository;
import com.github.aceisnotmycard.repositories.MedicalRecordRepository;
import com.github.aceisnotmycard.repositories.PatientRepository;
import com.github.aceisnotmycard.repositories.RoomRepository;
import com.github.aceisnotmycard.repositories.entities.Doctor;
import com.github.aceisnotmycard.repositories.entities.MedicalRecord;
import com.github.aceisnotmycard.repositories.entities.Patient;
import com.github.aceisnotmycard.repositories.entities.Room;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/medical-records")
public class MedicalRecordController extends BaseController<MedicalRecord, MedicalRecordRepository> {
    private PatientRepository patientRepo;
    private RoomRepository roomRepo;
    private DoctorRepository doctorRepo;

    @Autowired
    public MedicalRecordController(MedicalRecordRepository repo, PatientRepository patientRepo,
                                   RoomRepository roomRepo, DoctorRepository doctorRepo) {
        super(repo);
        this.patientRepo = patientRepo;
        this.roomRepo = roomRepo;
        this.doctorRepo = doctorRepo;
    }

    @Override
    public MedicalRecord create(@RequestBody MedicalRecord record) {
        Optional<Room> room = roomRepo.findByName(record.getRoom().getName());
        Optional<Patient> patient = patientRepo.findByName(record.getPatient().getName());
        room.ifPresent(r -> System.out.println(r.getName()));
        patient.ifPresent(p -> System.out.println(p.getName()));
        if (room.isPresent() && patient.isPresent()) {
            record.setRoom(room.get());
            record.setPatient(patient.get());
            record.setDoctors(record.getDoctors().stream()
                    .map(doc -> doctorRepo.findByName(doc.getName()))
                    .filter(Optional::isPresent).map(Optional::get).collect(Collectors.toSet())
            );
            return super.create(record);
        } else {
            return null;
        }
    }

    @RequestMapping(value = "/current", method = RequestMethod.GET)
    public List<MedicalRecord> getCurrent() {
        return repo.findByEndDateIsNull();
    }
}
