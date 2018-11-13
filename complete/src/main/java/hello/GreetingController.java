package hello;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class GreetingController {

	private static final String template = "Saludos!!!!, %s!";
	private static final String template2 = "Tu Nombre es: , %s!";
	private final AtomicLong counter = new AtomicLong();

	@RequestMapping(value = "/greeting", method = RequestMethod.GET)

	public List<Greeting> greeting(@RequestParam(value = "name", defaultValue = "World") String name) {

		List<Greeting> listado = new ArrayList<Greeting>();

		Greeting greeting1 = new Greeting(counter.incrementAndGet(), String.format(template, name),
				String.format(template2, name));
		Greeting greeting2 = new Greeting(counter.incrementAndGet(), String.format(template, name),
				String.format(template2, name));
		Greeting greeting3 = new Greeting(counter.incrementAndGet(), String.format(template, name),
				String.format(template2, name));
		Greeting greeting4 = new Greeting(counter.incrementAndGet(), String.format(template, name),
				String.format(template2, name));
		Greeting greeting5 = new Greeting(counter.incrementAndGet(), String.format(template, name),
				String.format(template2, name));
		Greeting greeting6 = new Greeting(counter.incrementAndGet(), String.format(template, name),
				String.format(template2, name));

		listado.add(greeting1);
		listado.add(greeting2);
		listado.add(greeting3);
		listado.add(greeting4);
		listado.add(greeting5);
		listado.add(greeting6);

		return listado;

	}
}
