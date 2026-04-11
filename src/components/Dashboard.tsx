import { Plus } from 'lucide-react';
import { useState } from 'react';
import { useProjectStore } from '@/store/projectStore';
import Header from './common/Header';

export default function Dashboard() {
  const [showNewProject, setShowNewProject] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contractor: '',
    consultant: '',
    startDate: '',
    endDate: '',
  });

  const { projects, addProject } = useProjectStore();

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString(),
      userId: '',
    };
    addProject(newProject);
    setFormData({
      name: '',
      contractor: '',
      consultant: '',
      startDate: '',
      endDate: '',
    });
    setShowNewProject(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <button
            onClick={() => setShowNewProject(!showNewProject)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Plus size={20} />
            New Project
          </button>
        </div>

        {showNewProject && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Create New Project</h3>
            <form onSubmit={handleAddProject} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Project Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Contractor"
                  value={formData.contractor}
                  onChange={(e) =>
                    setFormData({ ...formData, contractor: e.target.value })
                  }
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Consultant"
                  value={formData.consultant}
                  onChange={(e) =>
                    setFormData({ ...formData, consultant: e.target.value })
                  }
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Create Project
                </button>
                <button
                  type="button"
                  onClick={() => setShowNewProject(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No projects yet. Create one to get started!</p>
            </div>
          ) : (
            projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Contractor:</strong> {project.contractor}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Consultant:</strong> {project.consultant}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
