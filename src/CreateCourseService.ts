type CreateCourseProps = {
  name: string;
  duration: number;
  educator: string;
};

class CreateCourseService {
  execute({ duration, educator, name }: CreateCourseProps) {
    console.log(duration, educator, name);
  }
}

export default new CreateCourseService();
